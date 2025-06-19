import { Request, Response } from 'express';

export const getKeysPerUser = (req: Request, res: Response) => {
    res.status(200).send('List of keys');
};

export const createKey = (req: Request, res: Response) => {
    res.status(201).send('Key created');
};

export const getKeyById = (req: Request, res: Response) => {
    res.status(200).send('Key validated');
};

export const revokeKey = (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).send(`Key ${id} has been revoked`);
};
