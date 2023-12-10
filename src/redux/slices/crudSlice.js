import { createSlice } from "@reduxjs/toolkit"
import { v4 } from "uuid"

const initialState = {
    tasks :[
        {
            id:"2743917uoı",
            title:"Navbar Animasyonu",
            author:"Ahmet",
            assigned_to:"Mehmet",
            end_date:"2024-01-01"

        }
    ]
}

const crudSlice = createSlice({
    name:"crud",
    initialState,
    reducers:{

        /* yeni task ekler */
        addTask: (state, action) => {
            //todo: Todo'ya id ekleme:
            action.payload.id= v4();

            //todo: toolkit ile slice ta tuttuğumu veriyi doğrudan değiştirebiliriz.
            state.tasks.push(action.payload);
        },

        /*taski siler */
        removeTask: (state, action) => {
            
            //1.yöntem: filter methodu>yeni bir dizi oluşturur.
   /*          const filtered = state.tasks.filter((task) => task.id !== action.payload)
            state.tasks=filtered;
 */
            //2.yöntem: splice methodu> varolan diziyi günceller
            //--silinecek elemanın dizideki sırasını buluruz
            const i = state.tasks.findIndex((t) => t.id === action.payload)
            
            //splice ile diziyi güncelleme
            state.tasks.splice(i,1)
        },
        
        
        /* taski günceller */
        editTask: (state, action) => {
            //action payload ile gelen objenin state teki eski halini 
            //payload ile gelen yeni versiyon ile güncelleriz.
            
            //.1.yöntem splice methodu:
            //önce değişecek elemanın sırasını buluruz:
            const i = state.tasks.findIndex((t) => t.id === action.payload.id)

            /* state.tasks.splice(i,1,  action.payload) */ 
            
            //2.yöntem
            state.tasks[i] = action.payload;


            
        },
    }
})

export const {addTask, editTask, removeTask } = crudSlice.actions

export default crudSlice.reducer;