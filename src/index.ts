// https://github.com/flatfisher/cloud-functions-typescript-template/blob/master/src/index.ts
import { Request, Response } from 'express'

export function helloWorld(_: Request, res: Response) {
    try {
        res.status(200)
        res.send('Hello World')
    } catch (err) {
        res.status(500)
        res.send(err)
    }
}