import getHttpEvent from '@helpers/getHttpEvent';
import getRestEvent from '@helpers/getRestEvent';

type GetEventByMode = (mode: 'rest' | 'http', event: any) => any;

const getEventByMode: GetEventByMode = (mode, event) => {
  switch (mode) {
    case 'http':
      return getHttpEvent(event);
    case 'rest':
      return getRestEvent(event);
    default:
      throw new Error(`mode ${mode} not recognised`);
  }
};

export default getEventByMode;
