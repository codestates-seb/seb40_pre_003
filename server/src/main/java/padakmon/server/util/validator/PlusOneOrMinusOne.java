package padakmon.server.util.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = {PlusOneOrMinusOneValidator.class})
public @interface PlusOneOrMinusOne {
    String message() default "Only 1 or -1 possible";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
