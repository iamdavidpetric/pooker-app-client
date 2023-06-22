import { useState } from 'react';
import { ArrowLeft } from 'Resources/Icons';
import { Button, Card, TextField } from 'Components';

const Dashboard = () => {
  const [visibleCard1, setVisibleCard1] = useState(true);
  const [visibleCard2, setVisibleCard2] = useState(false);
  const [visibleCard3, setVisibleCard3] = useState(false);

  const versions = [
    {
      version: 'v0.1.0',
      message:
        'We’ve added new features like analytics, adding a new game and a new player to a game.',
    },
    {
      version: 'v0.2.0',
      message: 'We’ve made the app more stable by adding stability layers to it. ',
    },
    {
      version: 'v0.3.0',
      message: 'Starting the app as a minimum viable product',
    },
  ];

  return (
    <div className='bg-primary flex h-screen w-full justify-center items-center'>
      {visibleCard1 && (
        <Card
          className={'drop-shadow-md px-6'}
          title={'Welcome, stranger! 🚀'}
          subtitle={'Start login into an account to see your poker stats.'}>
          <div>
            <TextField label='Email' labelSize={'small'} />
          </div>
          <div>
            <TextField label='Password' labelSize={'small'} />
          </div>
          <div className='flex items-center justify-center mt-2'>
            <Button
              label={'SIGN IN'}
              variant={'primary'}
              className={'justify-center text-white text-sm'}
            />
          </div>
          <div className='flex flex-col text-center text-xs pb-2'>
            <Button
              label={'Dont have an account? Create one here'}
              variant={'transparent'}
              className={'justify-center'}
              onClick={() => {
                setVisibleCard1(false);
                setVisibleCard3(true);
              }}
            />
            <div className='pt-2'>0.3.0</div>
          </div>
        </Card>
      )}
      {visibleCard2 && (
        <Card
          iconTopLeft={
            <ArrowLeft
              onClick={() => {
                setVisibleCard2(false);
                setVisibleCard3(true);
              }}
            />
          }
          className={'drop-shadow-md px-8 pt-2'}
          title={'What’s new! 🚧'}
          subtitle={'See the changelog right here.'}>
          <div className='flex flex-col items-center justify-center'>
            <div className='h-52 w-96 bg-primary flex flex-col rounded-lg px-2 justify-evenly'>
              {versions.map((item, key) => (
                <div key={key} className='flex text-xs py-2'>
                  <div className={'pr-5'}>{item.version}</div>
                  <div>{item.message}</div>
                </div>
              ))}
            </div>
            <div className='text-xs pt-5 pb-2'>v0.3.0</div>
          </div>
        </Card>
      )}
      {visibleCard3 && (
        <Card
          iconTopLeft={
            <ArrowLeft
              onClick={() => {
                setVisibleCard3(false);
                setVisibleCard1(true);
              }}
            />
          }
          className={'drop-shadow-md px-8 pt-2'}
          title={'Heyo, stranger! 🚀'}
          subtitle={'Create an account to see poker stats.'}>
          <div>
            <TextField label={'Email'} labelSize={'small'} placeholder={'Enter your email'} />
          </div>
          <div>
            <TextField
              label={'Password'}
              labelSize={'small'}
              placeholder={'Enter your super secret password'}
            />
          </div>
          <div>
            <TextField
              label={'Password confirmation'}
              labelSize={'small'}
              placeholder={'Enter your super secret password'}
            />
          </div>
          <div className='flex flex-col text-center text-xs'>
            <Button variant={'primary'} className={'justify-center text-white'} label={'SIGN UP'} />
            <div className='flex flex-col text-center text-xs pb-2'>
              <Button
                label={'v0.3.0' + ' · ' + 'What’s new'}
                variant={'transparent'}
                className={'justify-center'}
                onClick={() => {
                  setVisibleCard3(false);
                  setVisibleCard2(true);
                }}
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
