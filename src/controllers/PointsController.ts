import knex from '../database/connection'
import { Request, Response } from 'express'

class PointsController{
	async create(request: Request, response: Response){
		const {
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			uf,
			city,
			items
		} = request.body

		const trx = await knex.transaction()

		const point = {
			image:'image-fake',
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			uf,
			city
		}

		const insertedIds = await trx('points').insert(point)

		const point_id = insertedIds[0];

		const pointItems = items.map((item_id :Number) => {
			return {
				item_id,
				point_id
			}
		})

		await trx('point_items').insert(pointItems);


		return response.json({id: point_id, ...point})
	}
}

export default PointsController