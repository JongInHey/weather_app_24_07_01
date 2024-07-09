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

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const loginHandler = () => {
    alert("로그인이 되었습니다!");
    navi("/");
  };

  return (
    <div style={{ color: "black" }}>
      <Title titleName={"LOGIN"} />
      <Wrap>
        <Container>
          <Link to={"/"} className="home">
            Home으로 가기
          </Link>
          <Form onSubmit={handleSubmit(loginHandler)}>
            <h3>LOGIN</h3>
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

            <Button $isBtnActive={isValid}>LOGIN</Button>
          </Form>

          <Seper>
            <Line />
            <span>OR</span>
            <Line />
          </Seper>

          <TextWrap>
            <p>
              아이디가 없으신가요? <Link to={"/signup"}>회원가입</Link>
            </p>
          </TextWrap>
        </Container>
      </Wrap>
    </div>
  );
};
