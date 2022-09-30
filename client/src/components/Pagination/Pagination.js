import s from './pagination.module.css'

function Pagination({currentPage, totalElems, limit, onPageChange}) {

    const pageCount = Math.ceil(totalElems / limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className={s.div}>
            {pages.map(el => (
            <button
                key={el}
                className={currentPage === el ? s.active : s.default}
                onClick={() => onPageChange(el)}
                >{el}
            </button> ))}
        </div>
    )
}

export default Pagination;