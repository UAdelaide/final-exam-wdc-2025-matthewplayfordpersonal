INSERT INTO Users (username, email, password_hash, role) VALUES ('alice123', 'alice@example.com', 'hashed123', 'owner');
INSERT INTO Users (username, email, password_hash, role) VALUES ('bobwalker', 'bob@example.com', 'hashed456', 'walker');
INSERT INTO Users (username, email, password_hash, role) VALUES ('carol123', 'carol@example.com', 'hashed789', 'owner');
INSERT INTO Users (username, email, password_hash, role) VALUES ('jeffjeff', 'jeff@example.com', 'hashed91289219', 'owner');
INSERT INTO Users (username, email, password_hash, role) VALUES ('notjefforbob', 'jeff323@example.com', 'hello', 'walker');

INSERT INTO Dogs (owner_id, name, size) SELECT user_id, 'Max', 'medium' FROM Users WHERE username = 'alice123';
INSERT INTO Dogs (owner_id, name, size) SELECT user_id, 'Max', 'medium' FROM Users WHERE username = 'carol123';
INSERT INTO Dogs (owner_id, name, size) SELECT user_id, 'Max', 'medium' FROM Users WHERE username = 'jeffjeff';
INSERT INTO Dogs (owner_id, name, size) SELECT user_id, 'Max', 'medium' FROM Users WHERE username = 'notjefforbob';
INSERT INTO Dogs (owner_id, name, size) SELECT user_id, 'Max', 'medium' FROM Users WHERE email = 'bob@example.com';

INSERT INTIO WalkRequests (dog_id, requested_time, duration_minutes, location, status, created_at) SELECT dog_id, '2025-06-10 08:00:00', 30, 'Parklands', 