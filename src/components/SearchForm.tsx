import { FC, useState } from "react";
import SearchObject from "../model/SearchObject";
import { useForm } from "react-hook-form";
import {
  Box,
  Field,
  Flex,
  HStack,
  Input,
  NativeSelect,
  Button,
} from "@chakra-ui/react";
import ranges from "../../config/ranges.json";
import { useColorModeValue } from "./ui/color-mode";
import useEmployeesQuery from "../state-management/store";


const SearchForm = () => {
    const searchObject = useEmployeesQuery(s => s.employeeQuery.searchObject);
    const setSearchObject = useEmployeesQuery(s => s.setSearchObject);
    const resetSearchObject = useEmployeesQuery(s => s.resetSearchObject);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchObject>({ defaultValues: searchObject ?? {} });
  const [type, setType] = useState<keyof typeof ranges | null>(searchObject?.type ?? null);
  const [minValue, setMinValue] = useState<number | null>(searchObject?.min ?? null);
function resetFields() {
    resetField("min", { defaultValue: null });
    resetField("max", { defaultValue: null });
}
  return (
    <Box marginStart={"5vw"}
      as="form"
      onReset={() => {
       setType(null);
       resetFields();
       resetSearchObject();
      }}
      onSubmit={handleSubmit((searchObj) => {
        setSearchObject(searchObj)
       
      })}
    >
      <Flex
        flexDirection={{
          base: "column",
          sm: "row",
        }}
        justifyContent={"center"}
      >
          <Field.Root invalid={!!errors.type}>
            <Field.Label>Search Type</Field.Label>
            <NativeSelect.Root size="sm" width={{
                base: "80vw",
                sm: "28vw"
            }}>
              <NativeSelect.Field
                placeholder="Select search by type"
                {...register("type", {
                  required: true,
                  onChange: (event) => {resetSearchObject();setType(event.target?.value);resetField("min",{defaultValue:null});resetField("max",{defaultValue:null})},
                })}
              >
                <option value="age">By age</option>
                <option value="salary">By salary</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            <Field.ErrorText>Search type is required</Field.ErrorText>
          </Field.Root>
        {type && (
          <Field.Root invalid={!!errors.min}>
            <Field.Label>minimal value for {type}</Field.Label>
            <Input
              width={{
                base: "80vw",
                sm: "25vw"
            }}
              {...register("min", {
                required: true,
                min: ranges[type].min,
                max: ranges[type].max,
                onChange: (event) => setMinValue(+event.target.value + 1),
              })} placeholder={`[${ranges[type].min}-${ranges[type].max}]`}
            />
            <Field.ErrorText>
              {getRangeErrorMessage(type, ranges[type].min)}
            </Field.ErrorText>
          </Field.Root>
        )}
        {type && minValue && (
          <Field.Root invalid={!!errors.max}>
            <Field.Label> maximal value for {type}</Field.Label>
            <Input width={{
                base: "80vw",
                sm: "25vw"
            }}
              {...register("max", {
                required: true,
                min: minValue,
                max: ranges[type].max,
              })} placeholder={`[${minValue}-${ranges[type].max}]`}
            />
            <Field.ErrorText>
              {getRangeErrorMessage(type, minValue)}
            </Field.ErrorText>
          </Field.Root>
        )}
        <HStack marginTop={"5vh"}>
        <Button type="submit" padding="2px" size="xs" bg={useColorModeValue("blue.500", "blue.200")}>Submit</Button>
        <Button type="reset" padding="2px" size="xs" bg={useColorModeValue("blue.500", "blue.200")}>Reset</Button>
      </HStack>
      </Flex>
      
    </Box>
  );
};


function getRangeErrorMessage(type: keyof typeof ranges, min: number): string {
  return `Value must be in the range [${min}-${ranges[type].max}]`;
}
export default SearchForm;
