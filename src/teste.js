<ListContainer>
  {this.state.jobs
    .filter((job) => {
      return (
        job.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
        job.description.toLowerCase().includes(this.state.query.toLowerCase())
      );
    })
    .filter((job) => {
      return this.state.minPrice === "" || job.price >= this.state.minPrice;
    })
    .filter((job) => {
      return this.state.maxPrice === "" || job.price <= this.state.maxPrice;
    })
    .sort((currentJob, nextJob) => {
      switch (this.state.sortingParameter) {
        case "title":
          return (
            this.state.order * currentJob.title.localeCompare(nextJob.title)
          );
        case "dueDate":
          return (
            this.state.order *
            (new Date(currentJob.dueDate).getTime() -
              new Date(nextJob.dueDate).getTime())
          );
        default:
          return this.state.order * (currentJob.price - nextJob.price);
      }
    })
    .map((job) => {
      return <Card key={job.id} job={job} />;
    })}
</ListContainer>;
