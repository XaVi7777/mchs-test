export const TablePage = () => (
  <div>
    <CssBaseline />
    <Container
      className={classes.container}
      maxWidth={false}
      disableGutters={true}
    >
      <Typography
        component="div"
        style={{ backgroundColor: '#cfe8fc', height: '100%' }}
      >
        <Header />

        <Table />
      </Typography>
    </Container>
  </div>
)
