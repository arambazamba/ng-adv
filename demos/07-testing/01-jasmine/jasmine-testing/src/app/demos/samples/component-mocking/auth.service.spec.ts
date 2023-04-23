import { AuthService } from './auth.service';

describe('AuthService', () => {
  let as: AuthService;

  beforeEach(() => {
    as = new AuthService();
  });

  it('should be created', () => {
    expect(as).toBeTruthy();
  });

  it('should indicate the correct login state', () => {
    as.logIn();
    expect(as.isAuthenticated()).toEqual(true);
    as.logOff();
    expect(as.isAuthenticated()).toEqual(false);
  });
});
