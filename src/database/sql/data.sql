USE project_4;


--ROLES crear roles (3 roles)
insert into roles (id, name) values (1, 'user');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'super-admin');


--USUARIOS crear usuarios en el sistema (10 usuarios)
insert into users (id, name, email, password, role_id) values (1, 'user', 'user@user.com', '$08$9X7A0PvGLimQKJLfAWQai.WiLutOMfc2nsi3BdCzS854AZr83Wob6', 1);
insert into users (id, name, email, password, role_id) values (2, 'admin', 'admin@admin.com', '$08$9X7A0PvGLimQKJLfAWQai.WiLutOMfc2nsi3BdCzS854AZr83Wob6', 2);
insert into users (id, name, email, password, role_id) values (3, 'super-admin', 'super-admin@super-admin.com', '$08$9X7A0PvGLimQKJLfAWQai.WiLutOMfc2nsi3BdCzS854AZr83Wob6', 3);


-- APPOINTMENTS crear citas(20 citas)
insert into appointments (appointment_date, user_id, service_id) values ('2023-06-02', 2, 3);
insert into appointments (appointment_date, user_id, service_id) values ('2023-06-26', 4, 5);
insert into appointments (appointment_date, user_id, service_id) values ('2023-05-08', 1, 2);
insert into appointments (appointment_date, user_id, service_id) values ('2024-01-23', 3, 5);
insert into appointments (appointment_date, user_id, service_id) values ('2023-10-26', 2, 4);
insert into appointments (appointment_date, user_id, service_id) values ('2023-09-04', 5, 5);
insert into appointments (appointment_date, user_id, service_id) values ('2023-05-24', 1, 2);
insert into appointments (appointment_date, user_id, service_id) values ('2023-05-24', 4, 4);
insert into appointments (appointment_date, user_id, service_id) values ('2023-09-21', 1, 1);
insert into appointments (appointment_date, user_id, service_id) values ('2023-09-02', 3, 2);
insert into appointments (appointment_date, user_id, service_id) values ('2023-07-16', 2, 1);
insert into appointments (appointment_date, user_id, service_id) values ('2023-06-15', 5, 1);
insert into appointments (appointment_date, user_id, service_id) values ('2023-03-28', 1, 4);
insert into appointments (appointment_date, user_id, service_id) values ('2023-12-27', 2, 5);
insert into appointments (appointment_date, user_id, service_id) values ('2024-02-21', 4, 3);
insert into appointments (appointment_date, user_id, service_id) values ('2023-07-08', 5, 4);
insert into appointments (appointment_date, user_id, service_id) values ('2023-10-01', 5, 3);
insert into appointments (appointment_date, user_id, service_id) values ('2023-08-08', 5, 3);
insert into appointments (appointment_date, user_id, service_id) values ('2023-03-23', 3, 4);
insert into appointments (appointment_date, user_id, service_id) values ('2023-03-30', 5, 3);






