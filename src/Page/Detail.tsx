import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineDelete, AiTwotoneEdit } from 'react-icons/ai';
import { faker } from '@faker-js/faker';
import {
  Container,
  Image,
  Title,
  Text,
  PriceText,
  PriceBox,
  ModifyContainer,
  ButtonGroup,
  CommentAddButton,
  CommentInput,
  CommentText,
  CommentTextTitle,
} from 'style/Detail';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

export default function Detail() {
  const params = useParams();
  const [data, setData] = useState<any>({});
  const [isModifyModal, setIsModifyModal] = useState(false);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [subDescription, setSubDescription] = useState('');
  const [comment, setComment] = useState('');
  const [priceCount, setPriceCount] = useState(1);

  const { register, handleSubmit } = useForm();

  const PlusPriceCount = () => {
    setPriceCount(prevCount => prevCount + 1);
  };

  const MinusPriceCount = () => {
    setPriceCount(prevCount => prevCount - 1);
  };

  const priceTotal = priceCount * data.price;

  const onChangeComment = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setComment(e.target.value);
    },
    []
  );

  const onChangePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(e.target.value);
    },
    []
  );

  const onChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const onChangeSubDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubDescription(e.target.value);
    },
    []
  );

  const onPostModifySubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      axios
        .patch(`${axios.defaults.baseURL}/post/${params.title}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          price,
          description,
          subDescription,
        })
        .then(res => {
          Swal.fire({
            title: '????????? ???????????????!',
            timer: 3000,
          });
          window.location.replace(`/${params.title}`);
        })
        .then(error => {
          console.error(error);
        });
    },
    [price, description, subDescription]
  );
  const onPostCommentAdd = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const Data = {
        id: `${params.title}`,
        comment: comment,
      };

      axios
        .post(`${axios.defaults.baseURL}/comment/${params.title}/comment`, Data)
        .then(response => {
          Swal.fire({
            title: '?????? ????????? ???????????????!',
            timer: 3000,
          });
          window.location.replace(`/${params.title}`);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [comment]
  );

  const getDetailData = async () => {
    const res = await axios.get(
      `${axios.defaults.baseURL}/post/${params.title}`
    );
    setData(res.data);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  const handleModifyModalControl = () => {
    setIsModifyModal(!isModifyModal);
  };

  const onDeleteButton = () => {
    async function DeleteData() {
      await axios.delete(`${axios.defaults.baseURL}/post/${params.title}`);
    }
    DeleteData();
    Swal.fire({
      title: '????????? ???????????????!',
      timer: 3000,
    });
    window.location.replace(`/`);
  };

  return (
    <>
      <ButtonGroup>
        <AiOutlineDelete onClick={onDeleteButton} />
        <AiTwotoneEdit onClick={handleModifyModalControl} />
      </ButtonGroup>

      <Container>
        <Image src={faker.image.city()} alt="City" />
        <Title>{data.title}</Title>
        <Text>{data.description}</Text>
        <Text>{data.subDescription}</Text>
        <PriceText>
          {[priceTotal].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ???
        </PriceText>

        <PriceBox>
          <button onClick={MinusPriceCount} disabled={priceCount < 2}>
            -
          </button>
          <input type="number" defaultValue={priceCount} />
          <button onClick={PlusPriceCount}>+</button>
        </PriceBox>

        <CommentTextTitle>?????? </CommentTextTitle>
        {data.Comments &&
          data.Comments.map((dataT: any) => {
            return (
              <div key={dataT.commenter}>
                <CommentText>{dataT.comment}</CommentText>
              </div>
            );
          })}

        <CommentInput
          placeholder="????????? ???????????????.."
          name="comment"
          type="text"
          defaultValue={comment}
          onChange={onChangeComment}
        />
        <CommentAddButton type="submit" onClick={onPostCommentAdd}>
          ?????? ??????
        </CommentAddButton>
      </Container>

      {isModifyModal === true && (
        <ModifyContainer onSubmit={handleSubmit(() => onPostModifySubmit)}>
          <label>??????</label>
          <input
            {...register('description', {
              minLength: { value: 3, message: '3??? ?????? ???????????????!' },
            })}
            type="text"
            onChange={onChangeDescription}
            tabIndex={2}
          />
          <label>?????? ??????</label>
          <input
            {...register('subDescription', {
              minLength: { value: 3, message: '3??? ?????? ???????????????!' },
            })}
            type="text"
            onChange={onChangeSubDescription}
            tabIndex={3}
          />
          <label>??????</label>
          <input
            {...register('price', {
              minLength: { value: 3, message: '3??? ?????? ???????????????!' },
            })}
            type="number"
            onChange={onChangePrice}
            tabIndex={4}
          />
          <button type="submit" onClick={onPostModifySubmit}>
            ??????
          </button>
        </ModifyContainer>
      )}
    </>
  );
}
