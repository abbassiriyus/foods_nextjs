   create table cinema(
        "id" serial primary key,
         "user"
        "time_create" timestamp default current_timestamp not null,
        "time_update" timestamp default current_timestamp not null
    );