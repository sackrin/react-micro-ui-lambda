import getHttpContext from '@helpers/getHttpContext';
import getRestContext from '@helpers/getRestContext';

type GetContextByMode = (mode: 'rest' | 'http', context: any) => any;

const getContextByMode: GetContextByMode = (mode, context) => {
  switch (mode) {
    case 'http':
      return getHttpContext(context);
    case 'rest':
      return getRestContext(context);
    default:
      throw new Error(`mode ${mode} not recognised`);
  }
};

export default getContextByMode;
