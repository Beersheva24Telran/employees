import { FC, useState } from "react";
import { LoginData } from "../model/auth-data";
import { Alert, Button, Field, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
interface Props {
  submitter: (loginData: LoginData) => Promise<boolean>;
}
const LoginForm: FC<Props> = ({ submitter }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>();
  const [isAlert, setIsAlert] = useState(false);
  const onSubmit = async (loginData: LoginData) => {
    const res = await submitter(loginData);
    if (res) {
      reset();
      setIsAlert(false);
    } else {
      setIsAlert(true);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.email}>
          <Field.Label>Username</Field.Label>
          <Input {...register("email", { required: true })} />
          <Field.ErrorText>Username is required</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Password</Field.Label>
          <Input
            {...register("password", { required: true })}
            type="password"
          />
          <Field.ErrorText>Password is required</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Submit</Button>
        {isAlert && (
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>
              Wrong Credentials
            </Alert.Title>
          </Alert.Root>
        )}
      </Stack>
    </form>
  );
};

export default LoginForm;
