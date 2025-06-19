import { Router } from 'express';
import {
    createKey,
    getKeyById,
    getKeysPerUser,
    revokeKey,
} from '../../controllers/keys.controller';

export const keysRouter = Router();

keysRouter.get('/', getKeysPerUser);

keysRouter.post('/', createKey);

keysRouter.get('/:id', getKeyById);

keysRouter.get('/:id/revoke', revokeKey);
