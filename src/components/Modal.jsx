import { useEffect, useState } from 'react'
import{ Modal, Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { addTask } from '../app/crudSlice'
const AddModal = (prop) => {

 const dispatch =useDispatch()
const state = useSelector((store)=> store.crudReducer )
console.log(state)

const [formState, setFormState] =useState({})
  /*  
       formun state in belirleme
 
  ? * düzenlenecek eleman varsa stateValue değişkenine o elmanın bilgilerini aktar
  ? * düzenlenicek eleman yoksa o zaman state değerlerini boş bırak

  
  show değeri her değiştiğinde 
    yani bileşen her ekrana geldiğinde sorguyu tekrar yaptık
  */



useEffect(()=> {
    const stateValue = prop.editTask ? prop.editTask : {
        title : '',
        author: '',
        assigned_to : '',
        end_date : ''
    }
    setFormState(stateValue)
    
}, [prop.show])

const handleSave =()=>{

 // objeyi store a aktar
    /*
    ? klasik redux'ta olan:
    dispatch({
        type:"crudReducer/addTask",
        payload: formState
    })
    */

    //  console.log(formState)
     dispatch (addTask(formState))
     prop.handleClose()
}

  return (
    <Modal show={prop.show}  onHide={()=>prop.handleClose()} >
       <Modal.Header  closeButton>
        <Modal.Title> {prop.editTask ? 'Düzenleme Modu' : 'Ekleme Modu'} </Modal.Title>
 </Modal.Header> 
 <Modal.Body>
<Form>
    <Form.Group className='mb-3'>
    <Form.Label> Başlık </Form.Label>
    <Form.Control onChange={(e)=>setFormState({...formState, title : e.target.value})}
    value={formState.title} type='text' placeholder='Başlık Giriniz' />
    </Form.Group>

    <Form.Group className='mb-3'>
    <Form.Label> Yazar </Form.Label>
    <Form.Control onChange={(e)=>setFormState({...formState, author : e.target.value})} type='text' 
     value={formState.author} placeholder='Başlık Giriniz'/>
    </Form.Group>

    <Form.Group className='mb-3'>
    <Form.Label> Kime Atanacak? </Form.Label>
    <Form.Control onChange={(e)=>setFormState({...formState, assigned_to: e.target.value})}
     value={formState.assigned_to} type='text' />
    <Form.Text>
     Görevin Atanacağı kişiyi belirleyin
     </Form.Text>
    </Form.Group>

    <Form.Group className='mb-3'>
    <Form.Label> Teslim Tarihi </Form.Label>
    <Form.Control onChange={(e)=>setFormState({...formState , end_date : e.target.value})}
     value={formState.end_date} type='date' />
    <Form.Text>
     Son teslim tarihini belirleyin
    </Form.Text>
    </Form.Group>
</Form>
 </Modal.Body>
     <Modal.Footer>
        <Button onClick={handleSave} >Kaydet</Button>
        <Button onClick={()=>prop.handleClose()}>Kapat</Button>
        </Modal.Footer>  
    </Modal>
  )
}

export default AddModal