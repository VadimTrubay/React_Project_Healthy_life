import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/PlannerCard/PlannerCard.styled';
import {
  Button,
  ButtonBlock,
  Title
} from './Reacord.styled';
import { addFood } from '../../redux/dailyFoodStatistics/foodOperations';
import { AddIcon, Box, ButtonAdd, ButtonDelete, RecordInputCalories, RecordInputCarbo, RecordInputFat, RecordInputName, RecordInputProtein, CancelButton, ContentBlock, Wrapper } from './MealPopUpModal.styled';
import sprite from '../../assets/images/sprite.svg';
import breakfast from '../../assets/images/Breakfast.png';
import dinner from '../../assets/images/Dinner.png';
import lunch from '../../assets/images/Lunch.png';
import snack from '../../assets/images/Snack.png';
import { Formik, Form, FieldArray } from 'formik';
import { InputBlock } from '../../components/ReacordMealPopUp/MealPopUpModal.styled'
import { capitalize } from '@mui/material';


const customStyles = {
  content: {
    maxWidth: 'calc(100vw + 20px)',
    maxHeight: 'calc(100vh - 24px)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -41%)',
    background: '#0F0F0F',
    padding: '16px 12px',
    borderRadius: '12px',
    borderColor: '#0F0F0F',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
    width: '100vw',
    height: '100vh',
  },
};

Modal.setAppElement('#root');

export const MealPopUpModal = ({ stateModal, closeModal, typefood }) => {
  const dispatch = useDispatch();

  const initialCard = {
    name: '',
    carbogidrate: '',
    protein: '',
    fat: '',
    calories: '',
  };

  const sendProducts = (values) => {
    let arr = {
      typeFood: typefood,
      userFood: values.products.map((product) => ({
        name: product.name,
        calories: product.calories,
        nutrition: {
          carbogidrate: product.carbogidrate,
          protein: product.protein,
          fat: product.fat,
        },
      })),
    };

    dispatch(addFood(arr));
    closeModal();
  };

  const img = (typefood) => {
    if (typefood === 'breakfast') {
      return breakfast;
    } else if (typefood === 'dinner') {
      return dinner;
    } else if (typefood === 'lunch') {
      return lunch;
    } else if (typefood === 'snack') {
      return snack;
    }
  };

  return (
    <Modal isOpen={stateModal} onRequestClose={closeModal} style={customStyles}>
      <ContentBlock>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            // justifyContent: 'baseline',
            marginTop: '24px',
          }}
        >
          <MealImage src={img(typefood)} alt={typefood} />
          <MealTitle>{capitalize(typefood)}</MealTitle>
        </MealContainer>

        <Formik
          initialValues={{ products: [initialCard] }}
          onSubmit={(values) => sendProducts(values)}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="products">
                {({ remove, push }) => (
                  <Wrapper>
                    {values.products.map((product, index) => (
                      <InputBlock key={index}>
                        <RecordInputName
                          name={`products.${index}.name`}
                          placeholder="The name of the product or dish"
                          value={values.products[index].name}
                        />
                        <RecordInputCarbo
                          name={`products.${index}.carbogidrate`}
                          placeholder="Carbonoh."
                          value={values.products[index].carbogidrate}
                          type="number"
                          min={0}
                          max={200}
                        />
                        <RecordInputProtein
                          name={`products.${index}.protein`}
                          placeholder="Protein"
                          value={values.products[index].protein}
                          min={0}
                          max={200}
                          type="number"
                        />
                        <Box>
                          <RecordInputFat
                            name={`products.${index}.fat`}
                            placeholder="Fat"
                            value={values.products[index].fat}
                            min={0}
                            max={200}
                            type="number"
                          />
                          <RecordInputCalories
                            name={`products.${index}.calories`}
                            placeholder="Calories"
                            value={values.products[index].calories}
                            min={0}
                            max={3000}
                            type="number"
                          />

                          <ButtonDelete
                            data-set={index}
                            type="button"
                            onClick={(e) => {
                              const index = e.currentTarget.dataset.set;
                              if (values.products.length === 1) {
                                closeModal();
                              }
                              remove(index);
                            }}
                          >
                            <svg
                              style={{
                                display: 'inline-block',
                                width: '20px',
                                height: ' 20px',
                                fill: '#E3FFA8',
                              }}
                            >
                              <use href={`${sprite}#trash-delete`}></use>
                            </svg>
                          </ButtonDelete>
                        </Box>
                      </InputBlock>
                    ))}
                    <ButtonAdd type="button" onClick={() => push(initialCard)}>
                      <AddIcon>
                        <use href={`${sprite}#icon-add-converted`}></use>
                      </AddIcon>
                      Add more
                    </ButtonAdd>
                  </Wrapper>
                )}
              </FieldArray>
              <ButtonBlock>
                <Button type="submit">Confirm</Button>
                <CancelButton onClick={closeModal} type="button">
                  Cancel
                </CancelButton>
              </ButtonBlock>
            </Form>
          )}
        </Formik>
      </ContentBlock>
    </Modal>
  );
};
