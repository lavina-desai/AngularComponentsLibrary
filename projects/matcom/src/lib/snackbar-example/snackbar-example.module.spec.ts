import { SnackbarExampleModule } from './snackbar-example.module';

describe('SnackbarExampleModule', () => {
  let snackbarExampleModule: SnackbarExampleModule;

  beforeEach(() => {
    snackbarExampleModule = new SnackbarExampleModule();
  });

  it('should create an instance', () => {
    expect(snackbarExampleModule).toBeTruthy();
  });
});
