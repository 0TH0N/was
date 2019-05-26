import Bottle from 'bottlejs';
import _ from 'lodash';
import entities from './entities';
import repositories from './repositories';
import services from './services';


const makeContainer = () => {
  const bottle = new Bottle();

  bottle.factory('repositories', () => {
    const result = Object.keys(repositories).reduce((acc, repoName) => ({
      ...acc, [_.lowerFirst(repoName)]: new repositories[repoName](),
    }), {});
    return result;
  });

  bottle.factory('entities', () => entities);

  bottle.factory('services', (container) => {
    const result = Object.keys(services).reduce((acc, serviceName) => ({
      ...acc, [_.lowerFirst(serviceName)]: new services[serviceName](container),
    }), {});
    return result;
  });

  return bottle.container;
};


export default makeContainer;
