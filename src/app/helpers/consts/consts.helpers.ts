export const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})/;


export const NAME_REGEX = /^(?!\s)[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,25}$/;


export const masks = {

  CPF: '999.999.999-99',
  CEP: '99999-999',
  CNPJ: '99.999.999/9999-99',
  PHONE_D: '(99) 99999-9999',
  PHONE: '(99) 9999-9999',
  CARD: '9999 9999 9999 9999 9',
  CARD_I: '999999 9999 99999 9999',
  DATE: '99/99/9999'

};
