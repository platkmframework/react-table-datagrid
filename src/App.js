import logo from './logo.svg';
import './App.css'; 
import { SortTable } from './platkm/component/datagrid/SortTable';
import { SortTableHeader } from './platkm/component/datagrid/SortTableHeader';
import { SortTableColumn } from './platkm/component/datagrid/SortTableColumn';
import { CheckImageComponent } from './platkm/examples/CheckImageComponent';

const dataList = [ 
  {id:1, company:'Company 1', address:'Street 1', associated:false, state:0, seo:'Antonio', employees:[
  {id:1, name:'Name 1', lastname:'Last name 1', age:20},
  {id:2, name:'Name 2', lastname:'Last name 2', age:21}
]},
  {id:2, company:'Company 2', address:'Street 1', associated:false, state:0,  seo:'Antonio',employees:[]},
  {id:3, company:'Company 3', address:'Street 1', associated:false, state:0,  seo:'Juan',employees:[]},
  {id:4, company:'Company 4', address:'Street 1', associated:false, state:0,  seo:'Ernesto',employees:[]},
  {id:5, company:'Company 5', address:'Street 5', associated:true, state:0,  seo:'Mario',employees:[]},
  {id:6, company:'Company 6', address:'Street 6', associated:false, state:0,  seo:'Juana',employees:[]}, 
  {id:7, company:'Company 7', address:'Street 7', associated:true, state:1,  seo:'Maria',employees:[]}, 
  {id:8, company:'Company 8', address:'Street 8', associated:false, state:0,  seo:'Pedro',employees:[]}, 
  {id:9, company:'Company 9', address:'Street 9', associated:false, state:0,  seo:'Esther',employees:[]}, 
  {id:10, company:'Company 10', address:'Street 10', associated:true, state:1,  seo:'Caridad',employees:[]}, 
  {id:11, company:'Company 11', address:'Street 11', associated:true, state:0,  seo:'Noelia',employees:[]}, 
  {id:12, company:'Company 12', address:'Street 12', associated:true, state:0,  seo:'Dekia',employees:[]}, 
  {id:13, company:'Company 13', address:'Street 13', associated:true, state:0,  seo:'Ana',employees:[]}, 
]

export function App() {


  return (
    <div className="App">

        <SortTable data={dataList}>

          <SortTableHeader column="company" title="Compañia"/> 
          <SortTableHeader column="address" title="Dirección"/> 
          <SortTableHeader column="associated" title="Associado"/> 
          <SortTableHeader column="state" title="Estado"/>

          <SortTableColumn column={'associated'} show={(row, column, value)=>(value?'Sí':'No')} />
          <SortTableColumn column={'state'} show={(row, column, value)=>(
                                                              <CheckImageComponent value={value} />
                                                            )} />

           <SortTable attribute='employees'>
              <SortTableHeader column="name" title="Nombre"/> 
              <SortTableHeader column="lastname" title="Apellidos"/>  
              <SortTableHeader column="age" title="Edad"/> 
            </SortTable>

        </SortTable>

    </div>
  );
}

export default App;
