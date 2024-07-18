import { Server } from 'socket.io';
import { Data } from '../models/data.model';

const saveDataService = async (data: Data, io: Server) => {
  const { created_by } = data;
  try {
    console.log(data)
    io.to(String(created_by)).emit('gasData', data);
  } catch (error) {
    console.error('Error emitting data:', error);
  }
};

export default saveDataService;
