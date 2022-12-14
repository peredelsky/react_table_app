import './App.css';
import Table from './components/Table'
import Pagination from './components/Pagination/Pagination'
import Dropdown from './components/Dropdown/Dropdown';
import { useEffect } from 'react';
import Store from './store/Store';
import { observer } from 'mobx-react-lite';
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/items') .then(response => Store.setData(response.data));
  }, [])


const searchBy = (data, term, first, condition) => {
  const label = 'label'
  const quantity = 'quantity'
  const distance = 'distance'

  if (term.length === 0) {
    return data
  }
  switch(first) {
    case 'Label':
      return universalSearch(data, term, condition, label)
    case 'Quantity':
      return universalSearch(data, term, condition, quantity)
    case 'Distance':
      return universalSearch(data, term, condition, distance)
    default:
      return data
  }
}

const universalSearch = (data, term, condition, column) => {
  switch(condition) {
    case 'More':
      return data.filter(item => item[column] > term)
    case 'Less':
      return data.filter(item => item[column] < term)
    case 'Include':
      return data.filter(item => String(item[column]).includes(term))
    case 'Equals':
      return data.filter(item => String(item[column]) === term)
  }
}


const sortedData = searchBy(Store.data, Store.term, Store.column, Store.condition)

const limit = 5
const lastPostIndex = Store.currentPage * limit
const firstPostIndex = lastPostIndex - limit
const visibleData = sortedData.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='container'>
      <div className='dropdowns'>
        <Dropdown selected={Store.column} setSelected={Store.setColumn} data={Store.columnArr}/>
        <Dropdown selected={Store.condition} setSelected={Store.setCondition} data={Store.conditionArr}/>
        {Store.column === 'Choose column' || Store.condition === 'Choose condition' ? null : 
          <input style={{padding: 10, width: 200}} 
            placeholder='Enter value'
            value={Store.term}
            onChange={e => {
              Store.setTerm(e.target.value)
              Store.setCurrentPage(1) // ?????? ?????????????????? ????????????????, ???? ???????????????? ???????? ????????????????????, ???????????????????????? ?????????????????????? ???? ???????????? ???????????????? 
            }}
          /> 
        }
      </div>
      <Table visibleData={visibleData}/>
      <Pagination currentPage={Store.currentPage} totalElems={sortedData.length} limit={limit} onPageChange={(page) => Store.setCurrentPage(page)}/>
    </div>
  );
}

export default observer(App);





  // const searchByDate = (data, term, condition) => {
  //   switch(condition) {
  //     case 'More':
  //       return data.filter(item => item.date > term)
  //     case 'Less':
  //       return data.filter(item => item.date < term)
  //     case 'Include':
  //       return data.filter(item => item.date.includes(term))
  //     case 'Equals':
  //       return data.filter(item => item.date === term)
  //   }
  // }
  
  // const searchByLabel = (data, term, condition) => {
  //   switch(condition) {
  //     case 'Include':
  //       return data.filter(item => item.label.includes(term))
  //     case 'Equals':
  //       return data.filter(item => item.label === term)
  //   }
  // }
  
  // const searchByQuantity = (data, term, condition) => {
  //   switch(condition) {
  //     case 'More':
  //       return data.filter(item => item.quantity > term)
  //     case 'Less':
  //       return data.filter(item => item.quantity < term)
  //     case 'Include':
  //       return data.filter(item => String(item.quantity).includes(term))
  //     case 'Equals':
  //       return data.filter(item => String(item.quantity) === term)
  //   }
  // }
  
  // const searchByDistance = (data, term, condition) => {
  //   switch(condition) {
  //     case 'More':
  //       return data.filter(item => item.distance > term)
  //     case 'Less':
  //       return data.filter(item => item.distance < term)
  //     case 'Include':
  //       return data.filter(item => String(item.distance).includes(term))
  //     case 'Equals':
  //       return data.filter(item => String(item.distance) === term)
  //   }
  // }
