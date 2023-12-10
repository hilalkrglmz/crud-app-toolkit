import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { addTask, editTask } from '../redux/slices/crudSlice'
import { useDispatch } from 'react-redux'

/* bu fomru hem ekleme hem düzenleme için kullancağız
bu noktada ne zaman düzenleme modalı açılacak ne zaman ekleme modalı açılacak
karar vermemiz lazım. Bu karara editItem parametresi ile karar vereceğiz.
eğer null geldiyse ekleme modundayız null gelmediyse düzenle modalındayız.
*/
const FormModal = ({ isOpen, close, editItem }) => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const newTask = Object.fromEntries(form.entries());

        if (editItem) {
            //düzenle

            dispatch(editTask({...newTask, id:editItem.id}))
        }
        else {
            dispatch(addTask(newTask));
        }

        //modal ı her durumda kapat
        close();
    }

    return (
        <div>
            <Modal
                show={isOpen}
                onHide={close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {editItem ? 'Görevi yeniden düzenle' : 'Yeni Görev Belirle'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='my-3'>
                            <Form.Label>Görev Başlığı</Form.Label>
                            <Form.Control
                                defaultValue={editItem?.title}
                                required
                                type="text"
                                name="title"
                                placeholder="Görev giriniz" />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <Form.Label>Yazar</Form.Label>
                            <Form.Control
                                required
                                defaultValue={editItem?.author}
                                type="text"
                                name="author"
                                placeholder="İsminizi giriniz" />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <Form.Label>Atanan Kişi</Form.Label>
                            <Form.Control
                                required
                                defaultValue={editItem?.assigned_to}
                                type="text"
                                name="assigned_to"
                                placeholder="Atanan kişiyi giriniz" />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <Form.Label>Tarih</Form.Label>
                            <Form.Control
                                required
                                defaultValue={editItem?.end_date}
                                type="date"
                                name="end_date"
                                placeholder="Son Teslim Tarihi:" />
                        </Form.Group>
                        <Modal.Footer className='mt-3'>
                            <Button onClick={close}>Close</Button>
                            <Button variant='success' type='submit' >Kaydet</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default FormModal