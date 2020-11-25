import React, { useState } from 'react';
import { Translate } from 'react-jhipster';
import { Button } from 'reactstrap';
import { ListStars } from '../Stars/Stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CardProduct.css';

export const CardProduct = ({ product, Link, match, paginationState }) => {
  return (
    <div className="cardPrducts card">
      <div className="card-header row justify-content-between align-items-center">
        <p className="textTitle">
          {product.id}. {product.name}
        </p>
      </div>
      <div className="card-body">
        <div className="contentImg row justify-content-center pb-2">
          <img id="imagen" src={`data:${product.imageContentType};base64,${product.image}`} alt={`imagen-${product.id}`} />
        </div>
        <p className="card-text">{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Size: {product.size}</p>
        <p className="mb-0">Recomendaciones:</p>
        <ListStars quality={product.stars} />
        <div className="row justify-content-around p-2">
          <Button tag={Link} to={`${match.url}/${product.id}`} color="info" size="sm">
            <FontAwesomeIcon icon="eye" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.view">View</Translate>
            </span>
          </Button>
          <Button
            tag={Link}
            to={`${match.url}/${product.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
            color="primary"
            size="sm"
          >
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
          <Button
            tag={Link}
            to={`${match.url}/${product.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
            color="danger"
            size="sm"
          >
            <FontAwesomeIcon icon="trash" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.delete">Delete</Translate>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ListCardProduct = ({ products, Link, match, paginationState }) => {
  return (
    <div className="row pt-4 pb-3 justify-content-around">
      {products.map(product => (
        <CardProduct key={product.id} paginationState={paginationState} Link={Link} match={match} product={product} />
      ))}
    </div>
  );
};
