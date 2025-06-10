import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    // Stub getQuestions to return mock data
    cy.fixture('questions.json').then((questions) => {
      cy.stub(require('../../../client/src/services/questionApi'), 'getQuestions').resolves(questions);
    });
  });

  it('starts the quiz when Start Quiz is clicked', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.card').should('exist');
    cy.get('h2').should('exist'); // Question is shown
  });

  it('shows next question when an answer is clicked', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('button.btn-primary').first().click();
    // Should show next question or completion if only one question
    cy.get('h2').should('exist');
  });

  it('shows score and allows starting a new quiz when completed', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // Answer all questions
    cy.fixture('questions.json').then((questions) => {
      questions.forEach(() => {
        cy.get('button.btn-primary').first().click();
      });
    });

    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score:').should('exist');
    cy.contains('Take New Quiz').should('exist').click();
    cy.contains('Start Quiz').should('exist');
  });
});