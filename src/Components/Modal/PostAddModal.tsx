import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Label, Input, Button } from 'style/PostAddModal';
import Swal from 'sweetalert2';

function PostAddModal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subDescription, setSubDescription] = useState('');
  const [price, setPrice] = useState('');
  const [Discount, setDiscount] = useState('');

  const { register, handleSubmit } = useForm(); // Input에 react-hook-form을 사용할것임을 선언

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
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

  const onChnagePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(e.target.value);
    },
    []
  );

  const onChangeDiscount = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDiscount(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      axios
        .post(`${axios.defaults.baseURL}/post`, {
          headers: {
            'Content-Type': 'application/json',
          },
          title,
          price,
          description,
          subDescription,
          Discount,
        })
        .then(res => {
          Swal.fire({
            title: '게시글 작성을 성공했어요!',
            timer: 3000,
          });
          window.location.replace(`/`);
        })
        .catch(error => {
          console.error(error);
          Swal.fire({
            title: '글 작성에 실패했어요!',
            timer: 2000,
          });
        });
    },
    [title, price, description, Discount, subDescription]
  );

  return (
    <Container onSubmit={handleSubmit(() => onSubmit)}>
      <Label>제목</Label>
      <Input
        {...register('title', {
          required: '제목은 필수 입력입니다',
          minLength: { value: 3, message: '3자 이상 입력하시오!' },
        })}
        type="text"
        onChange={onChangeTitle}
        tabIndex={1}
      />

      <Label>설명</Label>
      <Input
        {...register('description', {
          minLength: { value: 3, message: '3자 이상 입력하시오!' },
        })}
        type="text"
        onChange={onChangeDescription}
        tabIndex={2}
      />

      <Label>추가 설명</Label>
      <Input
        {...register('subDescription', {
          minLength: { value: 3, message: '3자 이상 입력하시오!' },
        })}
        type="text"
        onChange={onChangeSubDescription}
        tabIndex={3}
      />

      <Label>가격</Label>
      <Input
        {...register('price', {
          minLength: { value: 3, message: '3자 이상 입력하시오!' },
        })}
        type="number"
        onChange={onChnagePrice}
        tabIndex={4}
      />

      <Label>할인가</Label>
      <Input
        {...register('Discount', {
          minLength: { value: 3, message: '3자 이상 입력하시오!' },
        })}
        type="text"
        onChange={onChangeDiscount}
        tabIndex={5}
      />
      <Button type="submit" onClick={onSubmit}>
        게시
      </Button>
    </Container>
  );
}
export default PostAddModal;
