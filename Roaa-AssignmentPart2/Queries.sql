
-- (1) 
select type , max(importvalue) from Imports


-- (2) 
select type , sum(importvalue) from Imports 
group by(type)

-- (3) 
select type , min(importvalue) from Imports

-- (4) 
select * from Imports
order by importvalue asc





-- (5) ----------------------------------------------

-- find the average imports value for each type 

select type , avg(importvalue) as average  from imports
group by (type)


-- what is the year that they have largest imports value 

select yearDate, sum(importvalue) as total from imports
group by(yearDate)
order by total desc 
limit 1;


-- show only types that have imports avrage less than 500000000
select type , avg(importvalue) as average  from imports
group by (type)
having average < 500000000


-- show all the data on 2010
select * from imports
where yearDate="2010"




-- show all the record on last year in the DB
select type , yearDate , importvalue
FROM Imports
WHERE yearDate = (select max(cast(yearDate AS datetime)) from Imports);
    
    
    
-- show all records for the air port , sea port and land port
select * from Imports
where type like '%port'
    
    
-- check  if there any null record in importvalue
select * from Imports
where importvalue is null
    

-- find the records that importvalue between 100000000 and 800000000

select * from Imports
where importvalue between 100000000 and 800000000



-- the total imports for each years sorted in descending order

select yearDate, sum(importvalue) as total from imports
group by(yearDate)
order by total desc 




