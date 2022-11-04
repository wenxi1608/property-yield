import React, { useEffect, useState } from "react";
import ProjectCard from "./Card";
import Filter from "./Filter"
import ReactPaginate from "react-paginate";
import styles from "./Projects.scss";
import { Container } from "@mui/material";

const Section = (props) => {
  
// Sort projects by alphabetical order
const sortedProjects = props.results.sort()

// Pagination
const [page, setPage] = useState(0);
const projectsPerPage = 15;
const pagesVisited = page * projectsPerPage
const displayProjects = sortedProjects.slice(pagesVisited, pagesVisited + projectsPerPage).map(p => <ProjectCard key={p} results={p} />);
const changePage = ({selected}) => {
    setPage(selected)
  }

  if(!sortedProjects) {
    return (
      <div>""</div>
    )
  }

  return(
    <div>
      <ReactPaginate
        previousLabel = {"<"}
        nextLabel = {">"}
        pageCount = {Math.ceil(sortedProjects.length / projectsPerPage)}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previous-button"}
        nextLinkClassName={"next-button"}
        activeClassName={"active"}
      />
      <Container style={{marginBottom: "1em"}}>
        {displayProjects}
      </Container>
    </div>
  )
}

export default Section;


