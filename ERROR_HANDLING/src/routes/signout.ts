import express from 'express';
const router = express.Router();

router.post('/api/users/signout', (req, res) => {
	res.json({
		Signout: 'ArunabhArjun'
	});
});

export { router as signoutRouter };
