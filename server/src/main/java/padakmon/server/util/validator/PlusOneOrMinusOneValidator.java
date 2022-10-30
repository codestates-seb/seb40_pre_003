package padakmon.server.util.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PlusOneOrMinusOneValidator implements ConstraintValidator<PlusOneOrMinusOne, Integer> {
    @Override
    public void initialize(PlusOneOrMinusOne constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext context) {
        return value == 1 || value == -1;
    }
}
