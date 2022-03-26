import * as Fa from 'react-icons/fa';

const optionList = [
    {
        option:'Show More',
        key:Date.now() + 0,
        class:'show-more',
        icon:<Fa.FaInfoCircle/>,
        classLabel:'l-show-more'
    },
    {
        option:'Edit',
        key:Date.now() + 1,
        class:'edit',
        icon:<Fa.FaEdit/>,
        classLabel:'l-edit'
    },
    {
        option:'Capitalize',
        key:Date.now() + 2,
        class:'capitalize',
        icon:<Fa.FaClipboardList/>,
        classLabel:'l-capitalize'
    },
]

export default optionList