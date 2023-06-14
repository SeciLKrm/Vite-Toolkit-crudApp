import { useState } from 'react'
import AddModal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonGroup, Button, Table } from 'react-bootstrap'
import { removeTask } from '../app/crudSlice'


const CrudPage = () => {

const state =useSelector((store)=>store.crudReducer)
const dispatch =useDispatch()
const [showModal,setShowModal]=useState(false)

 //   düzenlenecek eleman
  /*
    başlangıçta null olarak belirliyoruz.
    modala eğer null gönderilirse modal bunu farkedecek ve ekleme işlemi yapacak
    düzenle butona tıklanır ve state'in içerisine değer atanırsa
    o zaman modal gönderilince modal bunu tespit eder ve düzenleme işlemi yapar
  */
const [editTask, setEditTask] =useState(null)

const handleClose =()=>{
    //   düzenlenecek elamanı sil
    setEditTask(null)
    //modal'ı kapat
    setShowModal(false)
}

  return (
    <div>
<AddModal  show={showModal} handleClose={handleClose} editTask={editTask} />
        <Button 
          // modal'ı açar
        onClick={()=>setShowModal(true)} 
        variant='danger' className='m-3'> Yeni Eleman Ekle </Button>

<Table striped bordered hover variant="dark">
<thead>
    <tr>
        <th>id</th>
        <th>Görev</th>
        <th>Yazar</th>
        <th>Atanan</th>
        <th>Tarih</th>
        <th>İşlemler</th>
    </tr>
</thead>
<tbody>
{
    state.tasks.map((task)=>(
    <tr key={task.id}>
      <td> {task.id} </td>
    <td> {task.title} </td>
    <td> {task.author} </td>
    <td> {task.assigned_to} </td>
    <td> {task.end_date} </td>
<td>
    <ButtonGroup >
        <Button onClick={ ()=>dispatch(removeTask(task.id))} variant='warning'> Sil</Button>
        <Button 
         // düzenlenecek elemanı state'e aktarır
        onClick={()=>{setEditTask(task)
        setShowModal(true)}} 
        variant='success'> Düzenle</Button>
    </ButtonGroup>
 </td>
    </tr>

    ))
}
</tbody>

</Table>
 </div>

  )
}

export default CrudPage