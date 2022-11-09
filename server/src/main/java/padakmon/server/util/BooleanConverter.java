package padakmon.server.util;

import javax.persistence.AttributeConverter;

//Y 또는 y를 true로, 그 외는 false로 변경
public class BooleanConverter implements AttributeConverter<Boolean, String> {
    @Override
    public String convertToDatabaseColumn(Boolean attribute) {
        return attribute ? "Y" : "N";
    }

    @Override
    public Boolean convertToEntityAttribute(String dbData) {
        return dbData.equals("Y") || dbData.equals("y") ? true : false;
    }
}
