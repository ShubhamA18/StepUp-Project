import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react';
import '../selectDrop/select.css';

const Select = ({data}) => {

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [selectedItem, setselectedItem] = useState('categories');
    const [listData,setlistData] = useState(data);
    const [listData1,setlistData1] = useState(data);

    const openSelect = () => {
        setisOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index, name) => {
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }

    const filterlist=(e)=>{
        const keyword = e.target.value.toLowerCase();

        const list = listData1.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })

        const list2 = list.filter((item,index)=>list.indexOf(item) === index );

        setlistData(list2)
    }

    return (

        <ClickAwayListener onClickAway={()=>setisOpenSelect(false )}>
            <div className='selectDrop cursor position-relative'>
                <span className='openSelect' onClick={openSelect}>{selectedItem.length>14 ? selectedItem.substring(0,14)+'...' : selectedItem} <KeyboardArrowDownIcon className='arrow' /></span>
                {
                    isOpenSelect === true &&
                    <div className='selectDrop1'>
                        <div className='searchField'>
                            <input type='text' placeholder='Search Categories' onChange={filterlist}/>
                        </div>
                        <ul className='searchResults'>

                            {
                                listData.map((item,index)=>{
                                    return(
                                        <li onClick={() => closeSelect(index,item)} className={`${selectedIndex === index ? 'active' : ''}`}>{item}</li>
                                    )
                                })
                            }

                        </ul>
                    </div>

                }

            </div>
        </ClickAwayListener>
    )
}

export default Select
