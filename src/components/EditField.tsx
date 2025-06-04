import { Editable, IconButton } from "@chakra-ui/react"
import { FC, useRef, useState} from "react";
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu";
import {departments} from "../../config/departments.json";
import {salary} from "../../config/ranges.json"
interface Props {
    field:string;
    submitter: (value: string | number) => void;
    oldValue: string|number

}
const EditField:FC<Props> = ({field, submitter, oldValue}) => {
   
    const selectRef = useRef<HTMLInputElement>(null); 
    const inputRef = useRef<HTMLInputElement>(null)
    const [editableKey, setEditableKey] = useState(0);
    function onSubmit(){
       if(field==="department") submitter(selectRef.current?.value as string)
        else {
    const value = Number(inputRef.current?.value)
    if (value < salary.min || value > salary.max) {
        alert(`salary must be in the range [${salary.min}-${salary.max}]`)
        inputRef.current!.value = oldValue + "";
        setEditableKey((prevKey) => prevKey + 1);
    } else {
submitter(value)
    }
    
}
    }
    
  return (
    <>
     <Editable.Root defaultValue={oldValue+""} submitMode="none"key={editableKey}>
      <Editable.Preview />
      {field === "department" ? <Editable.Input as="select" ref={selectRef}
      children={departments.map(d => <option value={d} key={d}>{d}</option>)}>

      </Editable.Input> : <Editable.Input as="input" type="number" ref={inputRef}  />}
      <Editable.Control>
        <Editable.EditTrigger asChild>
          <IconButton variant="ghost" size="xs">
            <LuPencilLine />
          </IconButton>
        </Editable.EditTrigger>
        <Editable.CancelTrigger asChild>
          <IconButton variant="outline" size="xs" >
            <LuX />
          </IconButton>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <IconButton variant="outline" size="xs" onClick={onSubmit}>
            <LuCheck />
          </IconButton>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable.Root>
    
    </>
   
    
  )
}
export default EditField