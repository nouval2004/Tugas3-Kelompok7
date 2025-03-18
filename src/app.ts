import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Add root route
app.get('/', (_req: Request, res: Response) => {
    res.send(`
        <html>
            <head>
                <title>Anime Characters API</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        margin: 40px;
                        line-height: 1.6;
                    }
                    h1 { color: #333; }
                    .endpoint {
                        background: #f4f4f4;
                        padding: 10px;
                        margin: 5px 0;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Anime Characters API</h1>
                <h2>Available Endpoints:</h2>
                <div class="endpoint">GET /characters - Get all characters</div>
                <div class="endpoint">GET /characters/:id - Get character by ID</div>
                <div class="endpoint">POST /characters - Create new character</div>
                <div class="endpoint">PUT /characters/:id - Update character</div>
                <div class="endpoint">DELETE /characters/:id - Delete character</div>
            </body>
        </html>
    `);
});

// Interface for AnimeCharacter
interface AnimeCharacter {
    id: number;
    name: string;
    anime: string;
    power: string;
}

// In-memory database
let characters: AnimeCharacter[] = [
    {
        id: 1,
        name: "Naruto Uzumaki",
        anime: "Naruto",
        power: "Rasengan"
    },
    {
        id: 2,
        name: "Monkey D. Luffy",
        anime: "One Piece",
        power: "Gomu Gomu no Mi"
    }
];

// GET all characters
app.get('/characters', (req: Request, res: Response) => {
    res.json({
        data: characters
    });
});

// GET single character by ID
app.get('/characters/:id', (req: Request<{id: string}>, res: Response) => {
    const id = parseInt(req.params.id);
    const character = characters.find(char => char.id === id);
    
    if (!character) {
        return res.status(404).json({ message: "Character not found" });
    }
    
    res.json({
        data: character
    });
});

// POST new character
app.post('/characters', (req: Request, res: Response) => {
    const { name, anime, power } = req.body;
    
    if (!name || !anime || !power) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    
    const newCharacter: AnimeCharacter = {
        id: characters.length + 1,
        name,
        anime,
        power
    };
    
    characters.push(newCharacter);
    res.status(201).json({
        message: "Character created successfully",
        data: newCharacter
    });
});

// PUT update character

// DELETE character
app.delete('/characters/:id', function (req, res) {
    var id = parseInt(req.params.id);
    var characterIndex = characters.findIndex(function (char) { return char.id === id; });
    if (characterIndex === -1) {
        return res.status(404).json({ message: "Character not found" });
    }
    characters = characters.filter(function (char) { return char.id !== id; });
    res.json({
        message: "Character deleted successfully"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
