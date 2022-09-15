import {articles} from '../../../data.js';

export default function handler(req, res) {
    const filtered = articles.filter(item => item.id === req.query.id);
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({message: `Article ${req.query.id} not found`})
    }
}
