CREATE DATABASE health_db;

USE health_db;

CREATE TABLE symptoms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symptom_name VARCHAR(50) NOT NULL,
    conditions TEXT NOT NULL
);

-- Insert some example data
INSERT INTO symptoms (symptom_name, conditions) VALUES 
('fever', 'Flu, COVID-19, Infection'),
('cough', 'Cold, Bronchitis, Asthma'),
('headache', 'Migraine, Tension Headache, Dehydration'),
('sore throat', 'Cold, Strep Throat, Allergy'),
('nausea', 'Food Poisoning, Stomach Flu, Pregnancy');
