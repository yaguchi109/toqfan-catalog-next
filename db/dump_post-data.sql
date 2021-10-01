--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- Name: articles articles_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pk PRIMARY KEY (id);


--
-- Name: authors authors_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pk PRIMARY KEY (id, "order");


--
-- Name: book_resources book_resources_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_resources
    ADD CONSTRAINT book_resources_pk PRIMARY KEY (id);


--
-- Name: serial_numbers serial_numbers_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.serial_numbers
    ADD CONSTRAINT serial_numbers_pk PRIMARY KEY (id);


--
-- Name: serials serials_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.serials
    ADD CONSTRAINT serials_pk PRIMARY KEY (id);


--
-- Name: tag_maps tag_maps_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag_maps
    ADD CONSTRAINT tag_maps_pk PRIMARY KEY (resource_id, tag_id);


--
-- Name: tags tags_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pk PRIMARY KEY (id);


--
-- Name: tag_maps_resource_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tag_maps_resource_id_idx ON public.tag_maps USING btree (resource_id);


--
-- Name: tag_maps_tag_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tag_maps_tag_id_idx ON public.tag_maps USING btree (tag_id);


--
-- Name: articles articles_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_fk FOREIGN KEY (serial_number_id) REFERENCES public.serial_numbers(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: articles articles_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_fk2 FOREIGN KEY (id) REFERENCES public.book_resources(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: authors authors_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_fk FOREIGN KEY (id) REFERENCES public.book_resources(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: serial_numbers serial_numbers_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.serial_numbers
    ADD CONSTRAINT serial_numbers_fk FOREIGN KEY (serial_id) REFERENCES public.serials(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: serial_numbers serial_numbers_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.serial_numbers
    ADD CONSTRAINT serial_numbers_fk2 FOREIGN KEY (id) REFERENCES public.book_resources(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: serials serials_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.serials
    ADD CONSTRAINT serials_fk FOREIGN KEY (id) REFERENCES public.book_resources(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tag_maps tag_maps_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag_maps
    ADD CONSTRAINT tag_maps_fk FOREIGN KEY (resource_id) REFERENCES public.book_resources(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tag_maps tag_maps_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag_maps
    ADD CONSTRAINT tag_maps_fk2 FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

