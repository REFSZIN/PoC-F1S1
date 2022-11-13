CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "memes" (
	"id" serial NOT NULL,
	"url" TEXT NOT NULL,
	"title" TEXT NOT NULL UNIQUE,
	"description" TEXT NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "memes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "memes" ADD CONSTRAINT "memes_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");


