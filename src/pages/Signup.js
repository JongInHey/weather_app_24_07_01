import { Title } from "../components/Title";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import {
  Wrap,
  Container,
  Form,
  Button,
  Seper,
  Line,
  TextWrap,
} from "../components/LoginStyle";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const loginHandler = () => {
    alert("회원가입 되었습니다!");
    navi("/login");
  };
  return (
    <div style={{ color: "black" }}>
      <Title titleName={"SIGN UP"} />
      <Wrap>
        <Container>
          <Link to={"/"} className="home">
            Home으로 가기
          </Link>
          <Form onSubmit={handleSubmit(loginHandler)}>
            <h3>SIGN UP</h3>
            <input
              {...register("username", {
                required: "아이디는 필수 입니다.",
                minLength: {
                  value: 2,
                  message: "아이디는 2자리 이상",
                },
              })}
              type="text"
              placeholder="login"
            />
            {/* {console.log(errors?.username?.message)} */}
            <ErrorMessage message={errors?.username?.message} />

            <input
              {...register("password", {
                required: "패스워드는 필수 입니다.",
                minLength: {
                  value: 8,
                  message: "패스워드는 8자리 이상",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                  message: "영문, 숫자, 특수기호 조합 8자리 이상 15자리 이하",
                },
              })}
              type="password"
              placeholder="password"
            />
            <ErrorMessage message={errors?.password?.message} />

            <input
              {...register("name", {
                required: false,
              })}
              type="text"
              placeholder="name"
            />
            <ErrorMessage message={errors?.name?.message} />

            <input
              {...register("email", {
                required: "이메일은 필수 입니다.",
                pattern: {
                  value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "이메일 형식에 맞게 작성해주세요.",
                },
              })}
              type="text"
              placeholder="email"
            />
            <ErrorMessage message={errors?.email?.message} />

            <Button $isBtnActive={isValid}>SIGN UP</Button>
          </Form>

          <Seper>
            <Line />
            <span>OR</span>
            <Line />
          </Seper>

          <TextWrap>
            <p>
              이미 아이디가 있으신가요? <Link to={"/login"}>로그인</Link>
            </p>
          </TextWrap>
        </Container>
      </Wrap>
    </div>
  );
};
