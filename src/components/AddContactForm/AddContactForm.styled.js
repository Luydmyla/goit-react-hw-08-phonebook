import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  width: 800px;
  border: 4px solid blue;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  /* text-transform: capitalize; */
`;

export const FormLabel = styled.label`
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: blue;
`;

export const FormInput = styled.input`
  width: 70%;
  margin-left: 20px;
  height: 44px;
  font-size: 20px;
  color: blue;
  border: 2px solid rgb(234, 255, 47);
`;

export const FormButton = styled.button`
  /* margin-top: 44px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  /* height: 44px; */
  padding: 5px;
  /* color: rgb(19, 61, 248); */
  /* background-color: rgb(234, 255, 47); */
  /* border: 3px solid darkslateblue; */
  /* border-radius: 10px; */
  /* width: 112px; */
  height: 44px;
  /* border: 2px solid blue; */
  box-shadow: 5px 5px 10px 1px #30ebfc;
  /* background: linear-gradient(lightyellow, lightblue); */
  border-radius: 10px;
  border: none;
  margin-top: 21px;
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 16px;
  transition: all 0.2s;
  /* text-transform: uppercase; */
  /* color: #2a363b; */
  color: blue;
  background-color: yellow;
  /* background-color: transparent; */
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px 1px #30ebfc;
    /* width: 115px;
    height: 44px; */
    /* background: #fff; */
    /* border: 1px solid #ff6b01; */
    color: #30ebfc;
  }
  &::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
  }
  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    // opacity: 0;
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px 1px #30ebfc;
  }
`;
