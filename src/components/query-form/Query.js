import React from "react"; 
import {  useContext } from "react";
import QueryContext from "../store/QueryContext";
import classes from "./Query.module.css";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import DataContext from "../store/DataContext";

const SORT_OPTIONS = [
    ["updatedAt1", "Latest"],
    ["updatedAt0", "Oldest"],
    ["temp1", "Temp (Highest)"],
    ["temp0", "Temp (Lowest)"],
    ["humid1", "Humid (Highest)"],
    ["humid0", "Humid (Lowest)"],
    ["light1", "Light (Highest)"],
    ["light0", "Light (Lowest)"],
]


const Query = () => {
    const queryContext = useContext(QueryContext);
    const dataContext = useContext(DataContext);
    return(
        <section>
            <h1>Filter</h1>
            <div className={classes.formWrapper}>
                <Form className={classes.form}>
                    <Form.Group className={classes.filters}>
                        <Form.Group className={classes.numberWrapper}>
                            <Form.Label htmlFor="limit">
                            Limit:
                            <Form.Control min="0" name="limit" type="number" step="1" value={queryContext.limit || ''} 
                            onChange={(e) => queryContext.changeFilters({limit: e.target.value})} />
                            </Form.Label>
                            <Form.Label htmlFor="skip">
                            Skip:
                            <Form.Control min="0" name="skip" type="number" step="1" value={queryContext.skip || ''} 
                            onChange={(e) => queryContext.changeFilters({skip: e.target.value})} />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className={classes.datesWrapper}>
                            <Form.Label htmlFor="start">
                            Start:
                            <Form.Control name="start" type="date" value={queryContext.rangeStart || ''} 
                            onChange={(e) => queryContext.changeFilters({rangeStart: e.target.value})} />
                            </Form.Label>
                            <Form.Label htmlFor="end">
                            End:
                            <Form.Control name="end" type="date" value={queryContext.rangeEnd || ''} 
                            onChange={(e) => queryContext.changeFilters({rangeEnd: e.target.value})} />
                            </Form.Label>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className={classes.submitWrapper}>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault();
                            dataContext.update_data({
                                sort: queryContext.sort,
                                limit: queryContext.limit,
                                skip: queryContext.skip,
                                rangeStart: queryContext.rangeStart,
                                rangeEnd: queryContext.rangeEnd,
                            })
                            
                        }}>
                            Apply
                        </Button>
                    </Form.Group>
                </Form>
                <Form.Group className={classes.sortWrapper}>
                    <Form.Label htmlFor="sort" className={classes.sort} onChange={(e) => dataContext.update_data({sort: e.target.value})}>
                        Sort by:
                        <Form.Select name="sort" onChange={(e) => queryContext.changeFilters({sort: e.target.value})} >
                            {
                                SORT_OPTIONS.map((elem) => {
                                    return(
                                        <option key={elem[0]} value={elem[0]} >{elem[1]}</option>
                                        );
                                    })
                                }
                        </Form.Select>
                    </Form.Label>
                </Form.Group>
            </div>
        </section>
        )
}

export default Query;