
import { Pagination } from 'flowbite-react';
export  function Paginator({page, setPage}) {

  return (
      <Pagination
      color='black'
      currentPage={page}
      onPageChange={page=>{setPage(page)}}
      totalPages={5}
    />
  )
}


