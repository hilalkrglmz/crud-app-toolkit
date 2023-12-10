import React, { useState } from 'react'
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormModal from '../components/FormModal'
import { removeTask } from '../redux/slices/crudSlice'


const CrudPage = () => {
const dispatch = useDispatch()
const state = useSelector((store) => store.crudReducer)

/*  stateler */

//MODAL AÇILACAK MI
const [isOpen, SetIsOpen] = useState(false)

//HANGİ ELEMAN DÜZENLENECEK
const [editItem, setEditItem] = useState(null)


console.log(editItem)

  return (
    <div className='px-3'>
    <Button onClick={() => {SetIsOpen(true)}}>Yeni Görev Ekle</Button>

{/* Oluşturma modal ı */}
<FormModal 
editItem={editItem}
isOpen={isOpen} 
close= {() => {SetIsOpen(false) ; 
//modal kapanınca modalı temizliyoruz.
setEditItem(null)}}/>


{/* tablo kısmı */}

    <Table className='mt-5' variant='dark' striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Görev</th>
          <th>Atayan</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
       {
        state.tasks.map((task,i) => (
            <tr key={i}>
            <td>{i}</td>
            <td>{task.title}</td>
            <td>{task.author}</td>
            <td>{task.assigned_to}</td>
            <td>{task.end_date}</td>
            <td>
              <ButtonGroup>
              <Button size='sm' onClick={() => dispatch(removeTask(task.id))} variant='danger'>Sil</Button>
              <Button size='sm'onClick={() => 
                //düzenlencek elemanı belirledi
                {setEditItem(task); 
                //modalı açtık
                SetIsOpen(true)}} variant='success'>Düzenle</Button>
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