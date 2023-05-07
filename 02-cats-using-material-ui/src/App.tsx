import { CatFact, LoadingCatFact } from './components';
import { useCatFacts } from './hooks';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Card, Grid, Typography } from '@mui/material';

function App() {
  const { fact, loadingFact, handleNewCatFact, handleReset } = useCatFacts();

  return (
    <Grid container>
      <Grid item sx={{ p: 3 }} sm={6}>
        <Card sx={{ p: 3 }} variant="outlined">
          <Typography variant="h4">Application to see cat facts!</Typography>
          <hr />
          <Button
            sx={{ mt: 1, mr: 2 }}
            variant="contained"
            onClick={handleNewCatFact}>
            Get a cat fact
          </Button>
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={handleReset}
            color="error">
            Reset
          </Button>
        </Card>
      </Grid>
      <Grid item sx={{ p: 3 }} sm={6}>
        {loadingFact ? <LoadingCatFact /> : <CatFact fact={fact} />}
      </Grid>
    </Grid>
  );
}

export default App;
