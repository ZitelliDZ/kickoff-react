import { Avatar, Grid, Typography } from '@mui/material';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const AuthLayout = ({ children, title = '' }: AuthLayoutProps) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <Grid
          item
          className="relative box-shadow bg-white/10   backdrop-blur  p-10 pt-16 rounded-3xl flex justify-center  shadow-lg shadow-black/90 text-white"
          xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Grid
            item
            className="absolute -top-[100px] box-shadow bg-white  rounded-full shadow-md shadow-black/90"
          >
            <Avatar
              src="/assets/images/logo.png"
              sx={{ width: 150, height: 150 }}
              className=" shadow-md shadow-black/50"
            />
          </Grid>
          <div className="flex w-full justify-center ">
            <Typography variant="h5" sx={{ mb: 1 }}>
              {title}
            </Typography>
          </div>

          {children}
        </Grid>
      </Grid>
    </>
  );
};
